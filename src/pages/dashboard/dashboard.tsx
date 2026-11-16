import { useEffect, useState } from "react";
import { Package, UsersRound } from "lucide-react";

import { getProducts } from "@/Utils/services/product.service";
import { getUsers } from "@/Utils/services/user.service";

import type { Product } from "@/types/product/product.types";
import type { User } from "@/types/user/user.types";

import {
  DashboardHeader,
  StatsGrid,
  StatCard,
  StatIcon,
  StatInfo,
  StatusMessage,
} from "./dashboard.styles";

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsData, usersData] = await Promise.all([
          getProducts(),
          getUsers(),
        ]);

        setProducts(productsData);
        setUsers(usersData);
      } catch {
        setError("دریافت اطلاعات داشبورد با خطا مواجه شد.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section>
      <DashboardHeader>
        <h2>خوش آمدید به پنل مدیریت NOVA</h2>
        <p>نمای کلی اطلاعات فروشگاه</p>
      </DashboardHeader>

      {isLoading ? (
        <StatusMessage>در حال دریافت اطلاعات...</StatusMessage>
      ) : error ? (
        <StatusMessage>{error}</StatusMessage>
      ) : (
        <StatsGrid>
          <StatCard>
            <StatIcon $variant="products">
              <Package size={23} />
            </StatIcon>
            <StatInfo>
              <span>تعداد محصولات</span>
              <strong>{products.length}</strong>
            </StatInfo>
          </StatCard>

          <StatCard>
            <StatIcon $variant="users">
              <UsersRound size={23} />
            </StatIcon>
            <StatInfo>
              <span>تعداد کاربران</span>
              <strong>{users.length}</strong>
            </StatInfo>
          </StatCard>
        </StatsGrid>
      )}
    </section>
  );
};

export default Dashboard;
