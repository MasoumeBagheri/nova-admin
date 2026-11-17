import { useEffect, useMemo, useState } from "react";

import { getUsers } from "@/Utils/services/user.service";
import type { User } from "@/types/user/user.types";
import { UserForm } from "@/Components/user-form";
import { Modal } from "@/Modals/modal";
import { useTranslation } from "@/shared/i18n/use-translation";

import {
  PageHeader,
  Toolbar,
  SearchInput,
  AddUserButton,
  UsersTable,
  Table,
  StatusMessage,
  Pagination,
  PageButton,
} from "./users.styles";

const PAGE_SIZE = 5;

const Users = () => {
  const { t } = useTranslation();

  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return users;

    return users.filter((user) => {
      const fullName =
        `${user.name.firstname} ${user.name.lastname}`.toLowerCase();

      return (
        fullName.includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });
  }, [users, search]);

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleUserCreated = (newUser: User) => {
    setUsers((current) => [newUser, ...current]);
    setCurrentPage(1);
    setIsFormOpen(false);
  };

  if (isLoading) {
    return <StatusMessage>{t("users.loading")}</StatusMessage>;
  }

  if (hasError) {
    return <StatusMessage>{t("users.error")}</StatusMessage>;
  }

  return (
    <section>
      <PageHeader>
        <div>
          <h2>{t("users.title")}</h2>
          <p>{t("users.description")}</p>
        </div>

        <AddUserButton type="button" onClick={() => setIsFormOpen(true)}>
          + {t("users.add")}
        </AddUserButton>
      </PageHeader>

      <Toolbar>
        <SearchInput
          type="search"
          placeholder={t("users.search")}
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </Toolbar>

      <Modal
        title={t("users.addNew")}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      >
        <UserForm onSuccess={handleUserCreated} />
      </Modal>

      {filteredUsers.length === 0 ? (
        <StatusMessage>
          {search ? t("users.notFound") : t("users.empty")}
        </StatusMessage>
      ) : (
        <>
          <UsersTable>
            <Table>
              <thead>
                <tr>
                  <th>{t("users.id")}</th>
                  <th>{t("users.username")}</th>
                  <th>{t("users.fullName")}</th>
                  <th>{t("users.email")}</th>
                  <th>{t("users.phone")}</th>
                  <th>{t("users.city")}</th>
                </tr>
              </thead>

              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>
                      {user.name.firstname} {user.name.lastname}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address?.city || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </UsersTable>

          {totalPages > 1 && (
            <Pagination>
              <PageButton
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
              >
                {t("common.previous")}
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
                {t("common.next")}
              </PageButton>
            </Pagination>
          )}
        </>
      )}
    </section>
  );
};

export default Users;
