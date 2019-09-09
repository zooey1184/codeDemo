import React from 'react'
import bg from './../imgs/bg.png'
import googleplay from './../imgs/googleplay.png'
import './style.less'
import HomeReason from './reason';
import HomeNeed from './needItem';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className='_home-bgPane'>
        <img src={bg} alt=""/>
        <div className='_home-bgText'>
          <p>
            TOPVAY là nền tảng P2P tại Việt Nam, cam kết thực hiện đầy đủ đổi mới tín dụng di động trong kinh doanh tín dụng truyền thống, nhiệm vụ của chúng tôi là cung cấp bảo mật an toàn cho khách hàng, dịch vụ cho vay thuận tiện , Người dùng chỉ cần một chiếc điện thoại di động để hoàn thành đơn vay, quá trình ký kết và hoàn trả toàn bộ tài chính đều thông qua ứng dụng di động TopVay. Không cần thế chấp tài sản, quá trình phê duyệt phức tạp hoặc thời gian chờ đợi quá lâu, không cần phải ra khỏi nhà, và sử dụng tùy ý với khoản vay.
          </p>
          <button className='bd_n'>
            <img src={googleplay} alt=""/>
            Tải xuống ứng dụng 1
          </button>
          <button className='bd_n'>
            <img src={googleplay} alt="" />
            Tải xuống ứng dụng 2
          </button>
        </div>
      </div>
      <HomeReason />
      <HomeNeed />
      <footer>
        <div className="footer_wrap mg_c">
          <h3 className='footerTitle'>Liên hệ cho chúng tôi:</h3>
          <div className='f_flex f_j_sb'>
            <div className='footer_item'>
              Công Ty TNHH Trust Tiền
            </div>
            <div style={{ width: '35%' }} className='footer_item'>
              Địa chỉ: D7/50 ẤP 4, XÃ HƯNG LONG, HUYỆN BÌNH CHÁNH, THÀNH PHỐ HỒ CHÍ MINH VIỆT NAM.
            </div>
            <div className='footer_item'>
              Điện thoại: 0329069614
            </div>
            <div className='footer_item'>
              Địa chỉ email: tujun737@gmail.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
