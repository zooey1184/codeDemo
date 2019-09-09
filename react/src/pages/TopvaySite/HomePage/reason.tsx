import React from 'react'
import Imga from '../imgs/a.png'
import Imgb from '../imgs/b.png'
import Imgc from '../imgs/c.png'
import Imgd from '../imgs/d.png'

const HomeReason:React.FC = ()=> {
  return (
    <div className='_home-reasonWrap mg_c'>
      <h3 className='_home-reasonTitle'>Lý do lựa chọn TOPVAY</h3>
      <div>
        <div className='_home-reasonItem'>
          <img src={Imga} alt=""/>
          <h4>Tỷ lệ phí minh bạch</h4>
          <p className='test'>Chúng tôi sẽ thông báo cho bạn về mức phí và phương thức thu nợ trước khi cho vay và đồng thời chúng tôi cũng sẽ cung cấp bản xem trước của kế hoạch hoàn trả và chi phí trả trước khi cho vay.</p>
        </div>
        <div className='_home-reasonItem'>
          <img src={Imgb} alt="" />
          <h4>Gỉai ngân nhanh chóng</h4>
          <p>Chúng tôi cung cấp đánh giá xét duyệt  thủ công và tự động để đảm bảo tốc độ giải ngân , và hứa sẽ giải ngân trong vòng 1 ngày sau thời gian xét duyệt</p>
        </div>
        <div className='_home-reasonItem'>
          <img src={Imgc} alt="" />
          <h4>Quy trình đơn giản</h4>
          <p>Bạn không cần phải cung cấp những thông tin phức tạp, chỉ cần một chiếc điện thoại di động, bạn có thể hoàn thành đơn vay bằng một vài bước đơn giản</p>
        </div>
        <div className='_home-reasonItem'>
          <img src={Imgd} alt="" />
          <h4>Bảo mật dữ liệu an toàn</h4>
          <p>Chúng tôi sẽ luôn bảo vệ sự riêng tư và bảo mật an toàn dữ liệu thông tin của bạn</p>
        </div>
      </div>
    </div>
  )
}

export default HomeReason