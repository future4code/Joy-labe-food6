import React, {useHistory} from 'react';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {goToLogin} from '../routes/coordinator'


const Feed = () => {

    //  const history = useHistory()



  return (
    <div>
    <h1> Feed aqui  </h1>
   
    {/* <button onClick={() => history.push('/login')} >Voltar</button>  */}
      <IconButton 
          variant="contained" 
          color="primary" 
          // onClick={()=> goToLogin(history)}
          >
            
          <HomeRoundedIcon/>
        
      </IconButton>

    </div>
    
    
    
    
    
  
  );
}

export default Feed;


