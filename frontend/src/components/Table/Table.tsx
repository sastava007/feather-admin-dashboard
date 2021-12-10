import React, { useState, useEffect, useMemo } from "react";
import { useQuery, useMutation } from "@apollo/client";
import moment from "moment";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import Pagination from "./Pagination";
import SelectColumnFilter from "./SelectColumnFilter";
import { StatusPill } from "./StatusPill";
import GlobalFilter from "./GlobalFilter";
import Modal from "./Modal";
import { GET_ALL_POLICIES } from "../../graphql/query";
import { UPDATE_POLICY } from "../../graphql/mutation";

interface Policy {
  _id: string;
  customer: {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
  };
  provider: string;
  insurance_type: string;
  status: string;
  policyNumber: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
}

export interface editableType {
  policyNumber: string;
  provider: string;
  status: string;
  insurance_type: string;
}

const Table: React.FC = () => {
  const { loading, data } = useQuery(GET_ALL_POLICIES);
  const [updatePolicy] = useMutation(UPDATE_POLICY);
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [currentData, setcurrentData] = useState<editableType>(Object);

  useEffect(() => {
    if (loading === false && data) {
      setPolicies(data?.getAllPolicies);
    }
  }, [loading, data]);

  const handleEdit = (values: editableType): void => {
    setcurrentData({
      policyNumber: values.policyNumber,
      provider: values.provider,
      status: values.status,
      insurance_type: values.insurance_type,
    });
    setIsEditing(!isEditing);
  };

  const handleUpdate = (values: editableType): void => {
    const id = policies.filter(
      (policy) => policy.policyNumber === values.policyNumber
    )[0]._id;
    const policyInput = {
      provider: values.provider,
      status: values.status,
      insurance_type: values.insurance_type,
    };
    updatePolicy({ variables: { updatePolicyId: id, policy: policyInput } })
      .then((res) => {
        if (!res.errors) {
          setPolicies(
            policies.map((p) => {
              return p._id === id
                ? {
                    ...p,
                    provider: values.provider,
                    insurance_type: values.insurance_type,
                    status: values.status,
                  }
                : p;
            })
          );
        } else {
          alert("Update failed, GraphQL validation error!");
        }
      })
      .catch((err) => {
        alert("Update failed, please check update parameters!");
      });
    setIsEditing(!isEditing);
  };

  const policiesData = useMemo(() => [...policies], [policies]);
  const policiesColumns: any = useMemo(
    () => [
      {
        Header: "#Policy",
        accessor: "policyNumber",
      },
      {
        Header: "Customer Name",
        accessor: (originalRow: any) => {
          return `${originalRow.customer.firstName}  ${originalRow.customer.lastName}`;
        },
      },
      {
        Header: "DOB",
        accessor: "customer.dateOfBirth",
        Cell: ({ value }: { value: Date }) =>
          moment(value).local().format("DD-MM-YYYY"),
      },
      {
        Header: "provider",
        accessor: "provider",
      },
      {
        Header: "Type",
        accessor: "insurance_type",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Start Date",
        accessor: "startDate",
        Cell: ({ value }: { value: Date }) =>
          moment(value).local().format("DD-MM-YYYY"),
      },
      {
        Header: "End Date",
        accessor: "endDate",
        Cell: ({ value }: { value: Date }) =>
          moment(value).local().format("DD-MM-YYYY"),
      },
      {
        Header: "Created At",
        accessor: "createdAt",
        Cell: ({ value }: { value: Date }) =>
          moment(value).local().format("DD-MM-YYYY"),
      },
      {
        id: "Edit",
        Header: "Action",
        Cell: ({ row }: { row: any }) => (
          <button
            className="bg-feather-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => handleEdit(row.values)}
          >
            Edit
          </button>
        ),
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns: policiesColumns,
      data: policiesData,
      initialState: { pageSize: 5 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      {isEditing && (
        <Modal
          isEditing={isEditing}
          currentData={currentData}
          handleUpdate={handleUpdate}
        />
      )}
      <div className="flex gap-x-2">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div key={column.id}>{column.render("Filter")}</div>
            ) : null
          )
        )}
      </div>
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " ▼"
                                : " ▲"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        state={state}
        pageOptions={pageOptions}
        setPageSize={setPageSize}
        gotoPage={gotoPage}
        pageCount={pageCount}
      />
    </>
  );
};

export default Table;
