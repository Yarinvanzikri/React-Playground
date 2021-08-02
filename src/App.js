import Initials from "./Initials/Initials";
import DayOfWeek from "./DayOfWeek/DayOfWeek"
import Article from "./Article/Article";
import Menu from "./Menu/Menu"
import MenuItem from "./Menu/MenuItem/MenuItem"
import './App.css';
import Counter from "./Counter/Counter";
import StudentPicker from "./StudentPicker/StudentPicker";
import RandomColorSquare from "./RandomColorSquare/RandomColorSquare";

function App() {
    function clickHandler() {
        console.log('you clicked');
    }
  return (
    <div>
        {/*<button onClick={clickHandler}>Click me</button>*/}
        {/*<Counter />*/}
        {/*<StudentPicker/>*/}
        <div>
            <Menu>
                <h1>Menu</h1>
                <MenuItem>
                    <a
                        href={'/Content'}>
                        Content
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                        href={'/Gallery'}>
                        Gallery
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href={'/Contact'}>
                        Contact
                    </a>
                </MenuItem>
            </Menu>
        </div>
        <div>
        <RandomColorSquare>

        </RandomColorSquare>
        </div>
      {/*<Initials name='Yarin Vanzikri'/>*/}
      {/*<DayOfWeek day={1}/>*/}
      {/*  <Article title='Weather' Content='The Weather Is Changing, What Do You Think?'/>*/}
    </div>
  )
}

export default App;
