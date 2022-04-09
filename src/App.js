
import { useEffect, useState } from 'react';
import './App.css';
import Values from 'values.js'
import SingleColor from "./SingleColor"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [color, setColor] = useState("#f15025")
  const [isColor, setIsColor] = useState(true)
  const [colorList, setColorList] = useState([])
  const [accuracy, setAccuracy] = useState(10)
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(accuracy)
      setColorList(colors)
      setIsColor(true)
    }
    catch (e) {
      setIsColor(false)
    }
  }


  useEffect(() => {
    let colors = new Values(color).all(accuracy)
    setColorList(colors)
    //  colors = colors.slice()
    // console.log(colors.length)

  }, [])
  return (
    <>
      <section className='container mt-3'>
        <div className='row'>
          <div className='col-md-3'>
            <h3>Color Generator</h3>
          </div>
          <div className='col-md-3 '>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-8'>
                  <input type="text" placeholder='#f15025' value={color} className={`${!isColor ? "form-control border border-danger" : "form-control"}`} onChange={((e) => setColor(e.target.value))} />
                </div>
                <div className='col-md-4 '>
                  <button type='submit' className='btn btn-info'>Submit</button>
                </div>
              </div>
            </form>

          </div>
          <div className='col-md-3 '>
            {/* <input type="number" placeholder={accuracy} value={accuracy} className={`${!isColor ? "form-control border border-danger" : "form-control"}`} onChange={((e) => setAccuracy(e.target.value))} /> */}
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className='row'>
          {colorList.map((color, indx) => {
            const h = color.hex
            return <SingleColor key={indx} {...color} hexVal={h} index={indx} length={colorList.length} />
          })}
        </div>
      
      </section>
    </>
  );
}

export default App;
