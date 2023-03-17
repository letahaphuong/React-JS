import logo from './logo.svg';
import './App.css';
const student = [
  {id: 1,name: 'Lê tạ hà phương',age: 12},
  {id: 1,name: 'Lê Thanh A',age: 13},
  {id: 1,name: 'Lê tạ hà phương',age: 14}
]
function App() {
  return (
    <div className="App">
      <table>
        <thead>
        <tr>
          <th>stt</th>
          <th>tên</th>
          <th>tuổi</th>
        </tr>
        </thead>
        {student.map(student => (
            <tbody>
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
            </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
