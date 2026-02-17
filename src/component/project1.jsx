import './project1.css'
import img1 from '../assets/w1.svg'
import img2 from '../assets/c2.jpeg'
function Project2() {
  return (
    <div className='main'>
      <div className='m1'>
        <div className='top1'>
          <img src={img2} alt="" srcset="" className='j1' />
        </div>
        <div className='top1'>
          <p>Fan <br/> Wishes</p>
        </div>
        <div className='top2'>
          <p>Promote My <br />Business</p>
        </div>
      </div>
      <div className='m2'>
        <div className='m3'>
          <div className='m10'></div>
          <div className='bottom1'>
            <p className='p1'>Product</p>
          </div>
          <div className='bottom2'>
            <div className='y1'> <input type="checkbox" name="" id="" className='n1' />
              <p className='n2'>Personalised video msg</p>
            </div>
            <div className='y1'> <input type="checkbox" name="" id="" className='n1' />
              <p className='n2'>Meet&Greet</p>
            </div>
            <div className='y1'> <input type="checkbox" name="" id="" className='n1'/>
              <p className='n2'>Video Call</p>
            </div>
            <div className='y1'> <input type="checkbox" name="" id=""className='n1' />
              <p className='n2'>social media pro</p>
            </div>
          </div>
        </div>
        <div className='m3'>
          <div className='u1'>
            <p className='p1'>Sort By</p>
          </div>
          <div className='u2'>
            <div className='y1'><input type="radio" name="" id="" className='n1'/>
            <p className='n2'>popular</p>
            </div>
            <div className='y1'><input type="radio" name="" id="" className='n1' />
            <p className='n2'>Lowest_Price</p>
            </div>
            <div className='y1'><input type="radio" name="" id="" className='n1' />
            <p className='n2'>Highest_Price</p>
            </div>
          </div>
        </div>
        </div>
        <img src={img1} alt="" srcset="" className='img' />
    </div>
  )
}

export default Project2