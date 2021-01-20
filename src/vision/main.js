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

var CV_URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + apiKey

export const VisionFunction = {
  /**
   * Sends the given file contents to the Cloud Vision API and outputs the
   * results.
   */
  sendFileToCloudVision: async function (content) {
    const type = 'LABEL_DETECTION'
    content = content.replace('data:image/jpeg;base64,', '')
    axios.post(CV_URL, {
      requests: [{
        image: {
          content: content
        },
        features: [{
          type: type,
          maxResults: 5
        }]
      }]
    })
      .then(response => console.log(response.data))
      .catch(error => {
        this.errorMessage = error.message
        console.error('There was an error!', this.errorMessage)
      })
  }
}
