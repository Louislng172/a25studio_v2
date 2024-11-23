// utils3d.worker.ts
self.onmessage = (event) => {
    const input = event.data;
    console.log('Worker nhận dữ liệu:', input);

    // Xử lý dữ liệu
    const result = input * 2;

    // Gửi kết quả về main thread
    self.postMessage(result);
};
