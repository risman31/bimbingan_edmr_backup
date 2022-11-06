import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  // public informasiData:any = [];

  // public kd_informasi:any = "";
  // public fakultas_info:any = "";
  // public prodi_info:any = "";
  // public dentry:any = "";

  constructor(
    public modalCtrl: ModalController,
  ) {
    // this.getData();
  }

  handleRefresh(event) {
    setTimeout(() => {
      // this.getData();
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

  // async getData() {
  //   try{
  //     // const res = await axios.get('https://edmrbimbingan.gebyar-it.xyz/elearning_native//get_bimbingan_informasi.php');
  //     const res = await axios.get('http://localhost/elearning_native/get_bimbingan_informasi.php');
  //     this.informasiData = res.data.result;
  //     console.log(this.informasiData);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }


}
