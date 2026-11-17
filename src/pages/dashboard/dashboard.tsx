import { useEffect, useState } from "react";
import { Package, UsersRound } from "lucide-react";

import { getProducts } from "@/Utils/services/product.service";
import { getUsers } from "@/Utils/services/user.service";

import type { Product } from "@/types/product/product.types";
import type { User } from "@/types/user/user.types";

import { useTranslation } from "@/shared/i18n/use-translation";

import {
  DashboardHeader,
  StatsGrid,
  StatCard,
  StatIcon,
  StatInfo,
  StatusMessage,
} from "./dashboard.styles";

const Dashboard = () => {
  const { t } = useTranslation();

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
        setError(t("dashboard.error"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [t]);

  return (
    <section>
      <DashboardHeader>
        <h2>{t("dashboard.welcome")}</h2>
        <p>{t("dashboard.description")}</p>
      </DashboardHeader>

      {isLoading ? (
        <StatusMessage>{t("dashboard.loading")}</StatusMessage>
      ) : error ? (
        <StatusMessage>{error}</StatusMessage>
      ) : (
        <StatsGrid>
          <StatCard>
            <StatIcon $variant="products">
              <Package size={23} />
            </StatIcon>
            <StatInfo>
              <span>{t("dashboard.productsCount")}</span>
              <strong>{products.length}</strong>
            </StatInfo>
          </StatCard>

          <StatCard>
            <StatIcon $variant="users">
              <UsersRound size={23} />
            </StatIcon>
            <StatInfo>
              <span>{t("dashboard.usersCount")}</span>
              <strong>{users.length}</strong>
            </StatInfo>
          </StatCard>
        </StatsGrid>
      )}
    </section>
  );
};

export default Dashboard;
