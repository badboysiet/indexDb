import React from "react";
import {sampleApiRequest} from "../ApiRequest/apirequest";
import axios from 'axios';


jest.mock("axios");

describe("fetchUsers", () => {
    describe("when API call is successful", () => {
      it("should return users list", async () => {
        // given
        const users = [
          { id: 1, name: "John" },
          { id: 2, name: "Andrew" },
        ];
        axios.get.mockResolvedValueOnce(users);
  
        // when
        const result = await sampleApiRequest();
  
        // then
        expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users`);
        expect(result).toEqual(users);
      });
    });

    describe("when API call fails", () => {
        it("should return empty users list", async () => {
          // given
          const message = "Network Error";
          axios.get.mockRejectedValueOnce(new Error(message));
    
          // when
          const result = await sampleApiRequest();
    
          // then
          expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users`);
          expect(result).toEqual([]);
        });
      });
    });
  
//  describe('Api Request call', () => {
//     it('should throw error if api fails', async () => {
//         await sampleApiRequest().then((res) => {
//             expect(res.status).toEqual(200)
//             expect(res.data.length).toBeGreaterThan(0)
//         })
//    })
//  })

//    describe('Api Header Request', () => {
//         it('should throw error if header value not set', () => {
//         expect(axios.defaults.baseURL).toEqual('https://jsonplaceholder.typicode.com');
            
//     })
// })