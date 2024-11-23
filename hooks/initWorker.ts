import {useEffect} from 'react'

export default function initWorker() {
    useEffect(() => {

        const worker = new Worker(new URL('./workerUtils/utils3d.worker.js', import.meta.url));
    
        // Send data to worker
        worker.postMessage(10);
    
        // onmessage
        worker.onmessage = (event) => {
            console.log('Rls from worker:', event.data);
        };

        worker.onerror = (error) => {
            console.error('Err from worker:', error.message);
        };
    
        // Cleanup 
        return () => {
            worker.terminate();
        };
    }, []);

  return null
}
