import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";

export default OffersTable

function OffersTable() {

    return <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        {/*<TableContainer sx={{ maxHeight: 440 }}>*/}
        {/*    <Table stickyHeader aria-label="sticky table">*/}
        {/*        <TableHead>*/}
        {/*            <TableRow>*/}
        {/*                {columns.map((column) => (*/}
        {/*                    <TableCell*/}
        {/*                        key={column.id}*/}
        {/*                        align={column.align}*/}
        {/*                        style={{ minWidth: column.minWidth }}*/}
        {/*                    >*/}
        {/*                        {column.label}*/}
        {/*                    </TableCell>*/}
        {/*                ))}*/}
        {/*            </TableRow>*/}
        {/*        </TableHead>*/}
        {/*        <TableBody>*/}
        {/*            {rows*/}
        {/*                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/}
        {/*                .map((row) => {*/}
        {/*                    return (*/}
        {/*                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>*/}
        {/*                            {columns.map((column) => {*/}
        {/*                                const value = row[column.id];*/}
        {/*                                return (*/}
        {/*                                    <TableCell key={column.id} align={column.align}>*/}
        {/*                                        {column.format && typeof value === 'number'*/}
        {/*                                            ? column.format(value)*/}
        {/*                                            : value}*/}
        {/*                                    </TableCell>*/}
        {/*                                );*/}
        {/*                            })}*/}
        {/*                        </TableRow>*/}
        {/*                    );*/}
        {/*                })}*/}
        {/*        </TableBody>*/}
        {/*    </Table>*/}
        {/*</TableContainer>*/}
        {/*<TablePagination*/}
        {/*    rowsPerPageOptions={[10, 25, 100]}*/}
        {/*    component="div"*/}
        {/*    count={rows.length}*/}
        {/*    rowsPerPage={rowsPerPage}*/}
        {/*    page={page}*/}
        {/*    onPageChange={handleChangePage}*/}
        {/*    onRowsPerPageChange={handleChangeRowsPerPage}*/}
        {/*/>*/}
    </Paper>
}