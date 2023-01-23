import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://gym-house-server-production-51a4.up.railway.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices]
};

export default useServices;