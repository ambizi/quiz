export default function Article02 () {
    return(
        <>
          <article className='art2'>
            <div className='box3'>
              <h2 className='text4'>Qual a sua idade?</h2>
              <div className='quiz_box'>
                <input type="button" value="-18" className='button1'/>
                <input type="button" value="18 a 25" className='button2'/>
                <input type="button" value="26 a 35" className='button3'/>
                <input type="button" value="36 a 45" className='button4'/>
                <input type="button" value="46 a 60" className='button5'/>
                <input type="button" value="61 a 70" className='button6'/>
                <input type="button" value="+71" className='button7'/>
              </div>
              <input type="submit" value="Avançar" className='confirm'/>
            </div>
          </article>
        </>
    )
}