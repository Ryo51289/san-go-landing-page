import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isScrolled = false;
  mobileMenuOpen = false;

  features = [
    {
      icon: '💧',
      title: 'Chống Nước Tuyệt Đối',
      desc: 'Công nghệ HDF chống ẩm, phù hợp mọi điều kiện thời tiết Việt Nam. An tâm sử dụng trong nhà bếp và phòng tắm.'
    },
    {
      icon: '🛡️',
      title: 'Siêu Bền Bỉ',
      desc: 'Lớp phủ bề mặt AC5 chống trầy xước cấp độ cao. Bảo hành lên đến 25 năm cho độ bền vượt trội.'
    },
    {
      icon: '🔧',
      title: 'Lắp Đặt Nhanh Chóng',
      desc: 'Hệ thống khóa hèm Click-Lock thông minh. Thi công nhanh, không cần keo dán, tiết kiệm thời gian.'
    },
    {
      icon: '🌿',
      title: 'Thân Thiện Môi Trường',
      desc: 'Đạt tiêu chuẩn E1 châu Âu về lượng formaldehyde. An toàn cho sức khỏe gia đình bạn.'
    },
    {
      icon: '🎨',
      title: 'Đa Dạng Mẫu Mã',
      desc: 'Hơn 50 mẫu vân gỗ tự nhiên sống động. Từ sồi, óc chó đến teak, phù hợp mọi phong cách.'
    },
    {
      icon: '💰',
      title: 'Giá Thành Hợp Lý',
      desc: 'Chiết khấu đặc biệt cho dự án lớn. Cam kết giá tốt nhất thị trường với chất lượng hàng đầu.'
    }
  ];

  productImages = [
    { src: 'images/z7633813047783_b57762cf89c1a260a0cf8e570779652c.jpg', alt: 'Sàn gỗ mẫu 1', label: 'Oak Classic' },
    { src: 'images/z7633813053828_6be58e555165cd2cd4d57d361c2ac1de.jpg', alt: 'Sàn gỗ mẫu 2', label: 'Walnut Dark' },
    { src: 'images/z7633813066973_51b70122b72720dba7e187a7391076ba.jpg', alt: 'Sàn gỗ mẫu 3', label: 'Maple Honey' },
    { src: 'images/z7633813148424_4e580c95f9e241b7d60e841ba0cca42c.jpg', alt: 'Sàn gỗ mẫu 4', label: 'Teak Natural' },
    { src: 'images/z7633813155101_5059190faadd491643a0478f64b32cac.jpg', alt: 'Sàn gỗ mẫu 5', label: 'Cherry Rose' },
    { src: 'images/z7633813169051_05781fafdd5f40a62516e1470f018eee.jpg', alt: 'Sàn gỗ mẫu 6', label: 'Ash Grey' },
    { src: 'images/z7633813208461_9c2cff5d90d5f52b4a5ba7cfc590f018.jpg', alt: 'Sàn gỗ mẫu 7', label: 'Pine White' },
    { src: 'images/z7633813397904_bb26c31cd4b10da1623f842e67de52b7.jpg', alt: 'Sàn gỗ mẫu 8', label: 'Birch Light' },
    { src: 'images/z7633813487316_7ebf724c3c6e098a056be269ba0ea071.jpg', alt: 'Sàn gỗ mẫu 9', label: 'Hickory Rustic' },
    { src: 'images/z7633813518164_3a4b5d15e25a3ccc1eac2cafd63f6464.jpg', alt: 'Sàn gỗ mẫu 10', label: 'Ebony Premium' },
    { src: 'images/z7633813528459_27c3592a6c011b32ae96094c5c4bf88d.jpg', alt: 'Sàn gỗ mẫu 11', label: 'Mahogany Rich' },
    { src: 'images/z7633813581816_198fb8db23af14c670fb9e41c902794d.jpg', alt: 'Sàn gỗ mẫu 12', label: 'Bamboo Sand' },
    { src: 'images/z7633813655009_41c2907280f31ad051ad4eace2aa5ef8.jpg', alt: 'Sàn gỗ mẫu 13', label: 'Acacia Golden' },
    { src: 'images/z7633813671418_12af4bce19fbba8588d0ecd2286fdccc.jpg', alt: 'Sàn gỗ mẫu 14', label: 'Cedar Warm' },
    { src: 'images/z7633813685199_15a3078ef1fe29d069ea57598b51ebc7.jpg', alt: 'Sàn gỗ mẫu 15', label: 'Elm Natural' },
    { src: 'images/z7633813712785_049b2789da1cb3cec9659fd07f9afdd3.jpg', alt: 'Sàn gỗ mẫu 16', label: 'Beech Silver' },
    { src: 'images/z7633813713645_004d044c63f6a8e2dbbfde0eb48d6732.jpg', alt: 'Sàn gỗ mẫu 17', label: 'Rosewood Dark' },
    { src: 'images/z7633813757332_699e98d587f453fd68c7be45690ae6d9.jpg', alt: 'Sàn gỗ mẫu 18', label: 'Poplar Light' },
    { src: 'images/z7633813823256_d823b8f0ae01120c439d930473539b57.jpg', alt: 'Sàn gỗ mẫu 19', label: 'Alder Classic' },
    { src: 'images/z7633813867690_94d91e197b9eccd2a349932ae5e77600.jpg', alt: 'Sàn gỗ mẫu 20', label: 'Spruce Nordic' },
    { src: 'images/z7633813890891_606ba1f61ff86db50f078ed4a8b39f99.jpg', alt: 'Sàn gỗ mẫu 21', label: 'Sycamore Grand' }
  ];

  services = [
    {
      step: '01',
      title: 'Tư Vấn & Khảo Sát',
      desc: 'Đội ngũ chuyên gia đến tận nơi khảo sát, tư vấn mẫu mã và phương án thi công phù hợp nhất.',
      items: ['Khảo sát miễn phí', 'Tư vấn chuyên sâu', 'Báo giá chi tiết']
    },
    {
      step: '02',
      title: 'Thi Công Lắp Đặt',
      desc: 'Đội ngũ thợ lành nghề, thi công chuyên nghiệp đảm bảo tiến độ và chất lượng hoàn hảo.',
      items: ['Thợ tay nghề cao', 'Đúng tiến độ cam kết', 'Thiết bị hiện đại']
    },
    {
      step: '03',
      title: 'Bảo Trì & Bảo Hành',
      desc: 'Chế độ bảo hành dài hạn cùng đội ngũ hỗ trợ sau bán hàng nhiệt tình, tận tâm.',
      items: ['Bảo hành đến 25 năm', 'Hỗ trợ 24/7', 'Bảo trì định kỳ']
    }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    this.closeMobileMenu();
  }
}
