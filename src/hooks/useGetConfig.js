import { useEffect, useState } from 'react';
import { getConfig } from '../services/web2';

export const useGetConfig = () => {
  const [config, setConfig] = useState();

  useEffect(() => {
    const _getConfig = async () => {
      const _config = await getConfig()
      setConfig(_config)
    }

    _getConfig()
  }, [])

  return { config }
}