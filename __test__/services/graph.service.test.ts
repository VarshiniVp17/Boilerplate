// __test__/services/graph.service.test.ts
import axios from 'axios';
import { GraphService } from '../../src/domain/services/common/graph.service';

describe('GraphService', () => {
  it('should fetch user profile', async () => {
    const accessToken = 'mock-access-token';
    const mockResponse = { data: { id: '123', displayName: 'John Doe' } };

    jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);

    const result = await GraphService.getUserProfile(accessToken);
    expect(result).toEqual(mockResponse.data);
  });
});