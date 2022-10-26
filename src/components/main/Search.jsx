import { Input, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import styles from './Main.module.scss'

const SearchPrefix = () => (
    <span style={{ margin: '5px' }}>
      <svg
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z"
          fill="#666666"
        />
      </svg>
    </span>
)
const Search = () => (
    <div className={styles.searchContainer}>
      <form action="">
        <Input
          size="large"
        class="ant-input"
      
          placeholder="Find the place to help"
          prefix={<SearchPrefix />}
          style={{
            border: 'none',
            width: '60%',
            borderRadius: '40px',
            
        }}
          onFocus={(x) => console.log('xxx ', x)}
        />
        <button className={`btn ${styles.searchContainer__btn}`} type="submit">
          Search
        </button>
      </form>
    </div>
)
  export default Search