import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {DataGrid} from '@material-ui/data-grid'
// import FormUser from '../FormUser/FormUser'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';

 // import {fetchAllUsers, selectUser} from "../../store/action/usersAction";
 // import { useDispatch, useSelector } from "react-redux";


import './Home.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '90VH',
        width: '100%'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        right: 30,
        bottom: 30,
        margin: '0 auto',
    },
}));

const users =[
    { id: 1, stage: '1', status: 'selling', description: '750 m2'},
    { id: 2, stage: '2', status: 'selling', description: '750 m2'},
    { id: 3, stage: '3', status: 'selling', description: '755 m2'}
]


const columns = [
    { field: 'id', headerName: 'ID', width: 250, hide:true },
    { field: 'stage', headerName: 'STAGE', width: 250 },
    { field: 'status', headerName: 'STATUS', width: 250 },
    { field: 'description', headerName: 'DESCRIPTION', width: 250 }

];

function Home() {
    const classes = useStyles();
    // const dispatch = useDispatch();
    // const users = useSelector(state => state.users.items);
    // const modify = useSelector(state => state.users.modify);
     //const [record, setRecord] = useState([]);
     //const [openFormDialog, setOpenFormDialog] = useState(false)
     //const [newRecord, setNewRecord] =useState(false)

    const handleFetchUsers = async () =>{
        // dispatch(await fetchAllUsers())
    }

    const handleSelectUser = () =>{
        // if (Object.keys(record).length>0){
        //     dispatch(selectUser(record))
        //     setOpenFormDialog(true)
        //     setNewRecord(false);
        // }
    }

    const handleInsertUser = () => {
        // setOpenFormDialog(true)
        // setNewRecord(true)
    }

    useEffect( () => {
        //handleFetchUsers()
    }, [
       // modify
    ]);

     return (
       <React.Fragment >
           <div>
           <DataGrid
                id={'DATAROW1'}
               pageSize={5}
                rowHeight={40}
                autoHeight={true}
                // onRowSelected={record=>{
                //     setRecord(record.data)
                // }}
                // onRowDoubleClick={handleSelectUser}
                 rows={users}
                columns={columns}
            />
               <AppBar position="fixed" color="primary" className={classes.appBar}>
                   <Toolbar>
                       <Fab color="secondary" aria-label="add" className={classes.fabButton}
                            // onClick={handleInsertUser}>
                           >
                           <AddIcon />
                       </Fab>
                   </Toolbar>
               </AppBar>
           </div>
        {/*<FormUser openFormDialog={openFormDialog}*/}
        {/*          setOpenFormDialog={setOpenFormDialog}*/}
        {/*          newRecord={newRecord}*/}
        {/*          setNewRecord={setNewRecord}/>*/}

       </React.Fragment>
    );

}

export default Home