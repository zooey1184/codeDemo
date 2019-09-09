import React from 'react'
import './style.less'

interface Ilist {
  f: string,
  a: string
}
const list: Array<Ilist> = [
  {
    f: 'Ai có thể  lên hồ sơ vay tiền ?',
    a: 'TopVay không giới hạn công việc của bạn , thu nhập hoặc những điều kiện  khác , chỉ cần bạn đã được 21 tuổi, có thu nhập và số điện thoại cố định thì bạn có thẻ tìm đến TopVay để lên hồ sơ vay'
  },
  {
    f: 'Tôi phải làm hồ sơ vay như  thế nào ?',
    a: 'Vui lòng mở Google Play , sau đó tìm kiếm và tải về ứng dụng  “TopVay” , Khi bạn đã hoàn tất, bạn có thể mở ứng dụng và bắt đầu quy trình đăng ký đi vay. Bạn cũng có thể đăng ký một khoản vay trên trang web chính thức'
  },
  {
    f: 'Tôi phải hoàn trả khoản vay như thế nào ? tôi có thể hoàn trả khoản vay sớm hơn không ?',
    a: 'Chúng tôi sẽ gửi tin nhắn đến email và điện thoại di động của bạn một ngày trước hạn chót để nhắc nhở bạn về việc trả nợ, Bạn có thể hoàn trả khoản vay  thông qua các kênh ngân hàng như ngân hàng trực tuyến, mobile banking  và chuyển khoản ATM. Sau khi thanh toán thành công , TopVay sẽ lập tức  thay đổi trạng thái khoản vay của bạn, để bạn có thể trả nợ tự động , chúng tôi ủng hộ việc bạn trả nợ sớm .'
  },
  {
    f: 'Cần nhứng tài liệu nào ? Quy trình thẩm định là gì?',
    a: 'Bạn chỉ cần điền 4 thông tin như được mô tả trong ứng dụng của TopVay. (thông tin cá nhân, bổ sung thông tin , xác thực hình ảnh và thông tin thẻ tài khoản ngân hàng ) sau khi nộp hồ sơ vay và chờ xét duyệt'
  },
  {
    f: 'Nếu quá hạn sẽ làm như thế nào ? Phí quá hạn sẽ được tính như thế nào ?',
    a: 'Nếu như bạn không có cách nào để thanh toán vào hoặc  trước ngày đáo hạn, khoản vay của bạn sẽ bị coi là quá hạn, ngoài phí tiền lãi trước ngày đáo hạn sẽ còn có phí quá hạn.'
  },
  {
    f: 'Hậu quả của việc không trả nợ đúng hạn là gì ?',
    a: 'Chúng tôi sẽ thực hiện các biện pháp pháp lý để thu tiền vay, chúng tôi cũng sẽ áp dụng tiền phạt và phí quản lý bổ sung.'
  },
  {
    f: 'Tại sao hồ sơ của tôi không được duyệt? Tôi có thể làm lại hồ sơ để vay hay không ?',
    a: 'Điều này có thể là do tài liệu bạn gửi có vấn đề và không đáp ứng các tiêu chí đánh giá , Vì lý do kiểm soát rủi ro, chúng tôi không thể cung cấp thông tin chi tiết về điểm tín dụng và lý do chi tiết từ chối đơn vay của bạn , nếu thông tin của bạn không thay đổi, Chúng tôi không khuyên bạn đăng ký lại trong tương lai gần. Nếu bạn cần vay, vui lòng thử lại ít nhất 7 ngày sau'
  },
  {
    f: 'Thông tin của tôi sẽ được chia sẻ với những người khác?',
    a: 'Chúng tôi hứa rằng chúng tôi sẽ không tiết lộ thông tin cá nhân của bạn cho bên thứ ba mà không có sự đồng ý của bạn'
  },
  {
    f: 'Làm thế nào để tính tới ngày đáo hạn ? kiểm tra khoản vay đến hạn như thế nào ?',
    a: 'Ngày hết hạn là 7/14 ngày sau khi khoản vay được phát hành dựa trên thời hạn cho vay bạn đã chọn. Sau khi khoản vay thành công, bạn có thể kiểm tra ngày đáo hạn khoản vay trên trang chủ của ứng dụng'
  }
]
const AboutPage: React.FC = () => {
  const List: JSX.Element[] = list.map((item, index)=> (
    <div key={index.toString()}>
      <p className='_about_f'>{item.f}</p>
      <p className='_about_a'>{item.a}</p>
    </div>
  ))
  return (
    <div className='_about_pane mg_c'>
      <p className='_about_title'>FAQ Câu hỏi thường gặp</p>
      {List}
    </div>
  )
}

export default AboutPage
