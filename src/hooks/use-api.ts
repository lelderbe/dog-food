import { useEffect, useState } from 'react';

export const useApi = (handler: any) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        handler()
            .then((result: any) => {
                setData(result);
            })
            .catch((err: any) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [handler]);

    return { data, loading, error };
};
