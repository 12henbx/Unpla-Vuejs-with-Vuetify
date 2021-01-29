// Copyright 2015, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License")
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import axios from 'axios'
import { apiKey } from './key'

var CV_URL = '/v1/images:annotate?key=' + apiKey

export function tesFunc (halo) {
  return console.log(halo)
}

function checkWasteCategory (jsonObj) {
  // let tell = {}
  console.log(jsonObj[0].description + ' test bla')
  for (var item of jsonObj) {
    console.log(item.description + ' INI FOREACH ')
    if (item.description.toUpperCase() === 'PLASTIC BOTTLE') {
      console.log(item.description.toUpperCase() + ' INI APINYA')
      return { output: 'Plastic Bottle', check: true, checkTable: ['Botol_Bening', 'Botol_Warna'] }
    } else if (item.description.toUpperCase() === 'PLASTIC BAG') {
      return { output: 'Kantong_Plastik', check: false }
    } else if (item.description.toUpperCase() === 'PLASTIC') {
      return { output: 'Plastik', check: true, checkTable: ['Plastik_Keras', 'Plastik_Sedotan', 'Plastik_Lainnya'] }
    } else if (item.description.toUpperCase() === 'TIN' || item.description.toUpperCase() === 'BEVERAGE CAN' ||
      item.description.toUpperCase() === 'TIN CAN') {
      return { output: 'Kaleng', check: false }
    } else if (item.description.toUpperCase() === 'PAPER' || item.description.toUpperCase() === 'NEWSPAPER') {
      return {
        output: 'Kertas',
        check: true,
        checkTable: ['Koran', 'Kertas_Putih', 'Dupleks',
          'Kertas_Buram', 'Kertas_Semen', 'Kertas_lainnya']
      }
    } else if (item.description.toUpperCase() === 'CARTON' || item.description.toUpperCase() === 'CARDBOARD') {
      return { output: 'Karton', check: false }
    } else if (item.description.toUpperCase() === 'WORKWEAR' ||
      item.description.toUpperCase() === 'PERSONAL PROTECTIVE EQUIPMENT') {
      return { output: 'Limbah_Medis', check: false }
    }
  }
  return {
    output: null,
    check: true,
    checkTable: ['Botol_Bening', 'Botol_Warna', 'Plastik_Keras', 'Plastik_Sedotan', 'Kantong_Plastik', 'Plastik_Lainnya',
      'Karton', 'Kardus',
      'Koran', 'Kertas_Putih', 'Dupleks', 'Kertas_Buram', 'Kertas_Semen', 'Kertas_lainnya',
      'Kaleng',
      'Limbah_Medis']
  }
  // return tell
}
/**
   * Sends the given file contents to the Cloud Vision API and outputs the
   * results.
   */
export async function sendFileToCloudVision (content) {
  // const resAxios = null
  const type = 'LABEL_DETECTION'
  content = content.replace('data:image/jpeg;base64,', '')
  // const response = await axios.post(CV_URL, {
  //   requests: [{
  //     image: {
  //       content: content
  //     },
  //     features: [{
  //       type: type,
  //       maxResults: 7
  //     }]
  //   }]
  // })
  const response = await axios.post(CV_URL, {
    requests: [{
      image: {
        content: content
      },
      features: [{
        type: type,
        maxResults: 7
      }]
    }]
  })
    .then(res => res.data)
    .catch(error => {
      this.errorMessage = error.message
      console.error('There was an error!', this.errorMessage)
    })
  console.log(response + ' TEST API 1')
  console.log(response.responses[0].labelAnnotations + ' TEST API 2')
  const tmp = checkWasteCategory(response.responses[0].labelAnnotations)
  return tmp
}
//   }
// })
