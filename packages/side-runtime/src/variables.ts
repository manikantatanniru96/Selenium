// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

export default class Variables {
  constructor() {
    this.storedVars = new Map()
  }
  storedVars: Map<string, any>

  static getKeySegments(key: string) {
    return key.split(/[.[\]]+/g).filter(Boolean)
  }

  get(key: string) {
    if (key.startsWith('env:')) {
      return process.env[key.slice(4)]
    }
    const [firstSegment, ...segments] = Variables.getKeySegments(key)
    let returnValue = this.storedVars.get(firstSegment)
    while (segments.length > 0) {
      const segment = segments.shift()!
      returnValue = returnValue[segment]
    }
    return returnValue
  }

  set(key: string, value: any) {
    const [firstSegment, ...segments] = Variables.getKeySegments(key)
    if (key === firstSegment) {
      this.storedVars.set(key, value)
    } else {
      let returnValue = this.storedVars.get(firstSegment)
      while (segments.length > 1) {
        const segment = segments.shift()!
        if (!returnValue[segment]) {
          returnValue[segment] = {}
        }
        returnValue = returnValue[segment]
      }
      returnValue[segments[0]] = value
    }
  }

  has(key: string) {
    if (key.startsWith('env:')) {
      return true
    }
    const [firstSegment, ...segments] = Variables.getKeySegments(key)
    let returnValue = this.storedVars.get(firstSegment)
    while (segments.length > 0) {
      if (returnValue === undefined) return false
      const segment = segments.shift()!
      returnValue = returnValue[segment]
    }
    return returnValue !== undefined
  }

  delete(key: string) {
    if (this.storedVars.has(key)) this.storedVars.delete(key)
  }

  clear() {
    this.storedVars.clear()
  }
}
