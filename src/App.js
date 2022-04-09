
import { useEffect, useState } from 'react';
import './App.css';
import Values from 'values.js'
import SingleColor from "./SingleColor"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [color, setColor] = useState("#f15025")
  const [isColor, setIsColor] = useState(true)
  const [colorList, setColorList] = useState([])
  const accuracy = 10
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
            <h3>Shades of Color</h3>
          </div>
          <div className='col-md-3 '>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-8'>
                  <input type="text" placeholder={color} value={color} className={`${!isColor ? "form-control border border-danger" : "form-control"}`} onChange={((e) => setColor(e.target.value))} />
                  {!isColor && <p className='text-danger mb-0'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                  </svg> Invalid color</p>}
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
