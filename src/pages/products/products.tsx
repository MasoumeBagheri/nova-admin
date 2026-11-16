import { useEffect, useMemo, useState } from "react";

import { getProducts } from "@/Utils/services/product.service";
import type { Product } from "@/types/product/product.types";
import { ProductForm } from "@/Components/product-form";
import { Modal } from "@/Modals/modal";

import {
  PageHeader,
  Toolbar,
  SearchInput,
  AddProductButton,
  ProductsTable,
  ProductImage,
  StatusMessage,
  Pagination,
  PageButton,
} from "./products.styles";

const PAGE_SIZE = 5;

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("دریافت محصولات با خطا مواجه شد.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return products;

    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    );
  }, [products, search]);

  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleProductCreated = (newProduct: Product) => {
    setProducts((current) => [newProduct, ...current]);
    setCurrentPage(1);
    setIsFormOpen(false);
  };

  return (
    <section>
      <PageHeader>
        <div>
          <h2>مدیریت محصولات</h2>
          <p>فهرست محصولات فروشگاه را مدیریت کنید.</p>
        </div>

        <AddProductButton type="button" onClick={() => setIsFormOpen(true)}>
          + افزودن محصول
        </AddProductButton>
      </PageHeader>

      <Toolbar>
        <SearchInput
          type="search"
          placeholder="جستجو بر اساس نام یا دسته‌بندی..."
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </Toolbar>

      <Modal
        title="افزودن محصول جدید"
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      >
        <ProductForm onSuccess={handleProductCreated} />
      </Modal>

      {isLoading ? (
        <StatusMessage>در حال دریافت محصولات...</StatusMessage>
      ) : error ? (
        <StatusMessage>{error}</StatusMessage>
      ) : filteredProducts.length === 0 ? (
        <StatusMessage>
          {search
            ? "محصولی با این مشخصات پیدا نشد."
            : "هنوز محصولی ثبت نشده است."}
        </StatusMessage>
      ) : (
        <>
          <ProductsTable>
            <table>
              <thead>
                <tr>
                  <th>تصویر</th>
                  <th>نام محصول</th>
                  <th>دسته‌بندی</th>
                  <th>قیمت</th>
                </tr>
              </thead>

              <tbody>
                {paginatedProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <ProductImage src={product.image} alt={product.title} />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>${product.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ProductsTable>

          {totalPages > 1 && (
            <Pagination>
              <PageButton
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
              >
                قبلی
              </PageButton>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <PageButton
                    key={page}
                    type="button"
                    $active={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PageButton>
                ),
              )}

              <PageButton
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((page) => page + 1)}
              >
                بعدی
              </PageButton>
            </Pagination>
          )}
        </>
      )}
    </section>
  );
};

export default Products;
