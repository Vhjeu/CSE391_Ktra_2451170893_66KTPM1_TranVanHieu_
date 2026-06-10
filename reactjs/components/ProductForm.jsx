import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
    // Quản lý state cho các trường nhập liệu
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('Còn hàng');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate cơ bản
        if (!name || !categoryId || categoryId === '-- Chọn danh mục --' || !price) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        const categoryMap = {
            '1': 'Điện thoại',
            '2': 'Máy tính bảng',
            '3': 'Phụ kiện',
            '4': 'Laptop',
            '5': 'Tai nghe'
        };

        const newProduct = {
            name: name,
            categoryId: categoryId,
            categoryName: categoryMap[categoryId],
            price: Number(price),
            status: status
        };

        onAddProduct(newProduct);

        handleReset();
    };

    const handleReset = () => {
        setName('');
        setCategoryId('');
        setPrice('');
        setStatus('Còn hàng');
    };

    return (
        <div className="card custom-card shadow-sm border-0 h-100">
            <div className="card-body p-4">
                <h3 className="fw-bold mb-1 fs-5">Thêm sản phẩm mới</h3>
                <p className="text-muted small mb-4">Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                        <input type="text" className="form-control" id="productName" placeholder="Nhập tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="productCategory" className="form-label">Danh mục</label>
                        <select className="form-select" id="productCategory" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                            <option value="">-- Chọn danh mục --</option>
                            <option value="1">Điện thoại</option>
                            <option value="2">Máy tính bảng</option>
                            <option value="3">Phụ kiện</option>
                            <option value="4">Laptop</option>
                            <option value="5">Tai nghe</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">Giá</label>
                        <input type="number" className="form-control" id="productPrice" placeholder="Nhập giá" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productStatus" className="form-label">Trạng thái còn hàng</label>
                        <select className="form-select" id="productStatus" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Còn hàng">Còn hàng</option>
                            <option value="Hết hàng">Hết hàng</option>
                        </select>
                    </div>

                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-submit flex-grow-1">Thêm sản phẩm</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>Làm mới form</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;