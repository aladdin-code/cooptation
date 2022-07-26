import { Box, Stack, Skeleton } from "@mui/material";
import Grid from '@mui/material/Grid';
import React, { useContext , useState, useEffect } from "react";
import { UserContext } from "../../shared/context/AuthContext";
import Offer from "./Offer.jsx";
import CreateOffer from "../components/createOffer";
 

import Axios from "../../api/axios";
import NoOffersCreateOne from "../components/NoOfferCreateOne";
  
 
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

const AdminOffers = props => {
 // const [user, setUser] = useState(null);
 // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
 const { user } = useContext(UserContext);

  const [offers, setOffers] = useState([]);
  const [rows, setRows]= useState([]);

 

  const fetchOffers = async () => {
    console.log("ffffffffffffffffffffffffff")
    const { data } = await Axios.get(
      "/api/offer"
    );
    const offers = data;
    setOffers(offers);
    console.log(offers.length)
    for (let i = 0; i < offers.length; i++) {
        console.log(".......................", i ," ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
        let data = createData(offers[i].title,offers[i].description, offers[i].modedemploi, offers[i].companyDescription, offers[i].responsabilities , offers[i].expYears , offers[i].startDate , offers[i].status) 
        
        setRows(oldArray => [...oldArray, data]);
        console.log("OOOOOOOOOOOOOOORow", rows)
    }

  };

  useEffect(() =>  {
     fetchOffers();
  }, []);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [5000]);



  function createData(title, description, modedemploi, companyDescription, responsabilities ,expYears, startDate , status) {
    return {
        title,
        description,
        modedemploi, 
        companyDescription,
        responsabilities ,
        expYears,
        startDate , 
        status,
    };
  }
  

  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    {
      id: 'title',
      numeric: false,
      disablePadding: true,
      label: 'Titre Du L\'offre',
    },
    {
      id: 'description',
      numeric: true,
      disablePadding: false,
      label: 'description',
    },
    {
      id: 'modedemploi',
      numeric: true,
      disablePadding: false,
      label: 'modedemploi',
    },
    {
      id: 'companyDescription',
      numeric: true,
      disablePadding: false,
      label: 'companyDescription',
    },
    {
      id: 'responsabilities',
      numeric: true,
      disablePadding: false,
      label: 'responsabilities',
    },
    {
        id: 'expYears',
        numeric: true,
        disablePadding: false,
        label: 'expYears',
    },
    {
        id: 'startDate',
        numeric: true,
        disablePadding: false,
        label: 'startDate',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'status',
      },
  ];
  
  function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
      <Toolbar
      
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
           Les Offres
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('startDate');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
               
  if (offers.length > 0){
          
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    console.log("sellllected", name) // return indifined
    const selectedIndex = selected.indexOf(name);

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <Box  sx={{ width: '100%'}}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              color={'error'}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {rows.slice().sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.modedemploi}</TableCell>
                      <TableCell align="right">{row.companyDescription}</TableCell>
                      <TableCell align="right">{row.responsabilities}</TableCell>
                      <TableCell align="right">{row.expYears}</TableCell>
                      <TableCell align="right">{row.startDate}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
} else {
    return (
    <div>
    <NoOffersCreateOne/> 
    </div>
    );
} if (offers.length > 0) {
    return (
      <div>
        {
          user.user.isAdmin?   <CreateOffer/> : null
        }``   
     <Box flex={4} p={{ xs: 0, md: 2 }}>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
          </Stack>
        ) : (       
          <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>  
          {offers.slice(0).reverse().map((offre, index) => (
            <Grid   item xs={12} sm={12} md={6} key={index}>
              <Offer
                  key={offre._id}
                  id={offre._id}
                  image={"http://localhost:5000/images"+offre.image}
                  title={offre.title}
                  modedemploi={offre.modedemploi}
                  expYears={offre.expYears}
                  requiredSkills={offre.requiredSkills}
                  responsabilities={offre.responsabilities}
                  description={offre.description}
                  company={offre.company}
                  companyDescription={offre.companyDescription}
                  startDate={offre.startDate}
                  duration={offre.duration}
                  createdAt={offre.createdAt}
              />     
            </Grid>
          ))}
        </Grid>
        )}
      </Box>
      </div>


    );

   
  } else { 
    return (
      <div>

     
        <NoOffersCreateOne/>
       
      
      
      </div>
    
        
    );
   }
};
export default AdminOffers;