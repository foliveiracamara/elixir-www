import SearchIcon from '@mui/icons-material/Search';

import style from './Search.module.scss'

export default function Search({ placeholder }){
  return(
    <div className={style.container}>
      <input 
        placeholder={placeholder} 
        type={"text"}
        className={style.input}
      />
      <SearchIcon className={style.icon}/>
    </div>
  )
}