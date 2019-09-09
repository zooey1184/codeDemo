import React from 'react'
import Imga from '../imgs/1.png'
import Imgb from '../imgs/2.png'
import Imgc from '../imgs/3.png'

const HomeNeed: React.FC = ()=> {
  return (
    <div className='_home-needPane'>
      <div className='_home-needWrap mg_c'>
        <h3 className='_home-needTitle'>Ai có thể nhận được khoản vay của chúng tôi</h3>
        <div className='f_flex f_a_c f_j_sb'>
          <div className="_home-needItem">
            <img src={Imga} alt=""/>
            <p>Sinh Viên</p>
          </div>
          <div className="_home-needItem">
            <img src={Imgb} alt="" />
            <p>Người đi làm bán thời gian</p>
          </div>
          <div className="_home-needItem">
            <img src={Imgc} alt="" />
            <p>Người có thu nhập ổn định</p>
          </div>
        </div>
        <p className='_home-needTxt'>TopVay có thể cung cấp dịch vụ cho vay đối với tất cả các thành phần khách hàng để giải quyết vấn đề tài chính của bạn. Dù bạn là sinh viên, công nhân hay người có thu nhập ổn định, chúng tôi đều có thể đáp ứng nhu cầu của bạn.</p>
      </div>
    </div>
  )
}

export default HomeNeed