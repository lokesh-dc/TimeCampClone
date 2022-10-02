import { Box, Grid, Img, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../../Store/tasks/tasks.actions";
import TaskDiv from "./TaskDiv";

export default function AllTasks() {
    const {loading, data, error} = useSelector((store)=> store.tasks)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTasks());
    },[dispatch])

    return (
        <Grid gap="10px" px="100px" py="30px" >
            {
                data.length===0 ? 
                    <Grid justifyContent="center" alignItems="center" textAlign="center">
                        <Box>
                            <Img src={require("../../../Resources/no-data.png")} />
                        </Box>
                        <Text fontSize="2xl" >No recent time entries </Text>
                        <Text>Seems like you haven’t tracked any time yet</Text>
                    </Grid>
                :
                data?.map((t)=>(
                    <TaskDiv key={t._id} t={t}/>
                ))
            }
        </Grid>
    )
}