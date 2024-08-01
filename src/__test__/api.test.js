import { sleep as mockSleep, submitLogin as mockSubmitLogin } from '../api';
import { describe, it, expect, afterEach, vi } from 'vitest';

vi.mock('../api');

afterEach(() => {
  vi.clearAllMocks();
});

describe('API tests', () => {
  it('[1] sleep', async () => {
    await mockSleep(1000);
    expect(mockSleep).toHaveBeenCalledTimes(1);
    expect(mockSleep).toHaveBeenCalledWith(1000);
  });

  it('[2] submitLogin', async () => {
    const fakeUser = {
      username: 'yellowSally@flytie.com',
      password: 'testing123',
    };

    mockSubmitLogin.mockResolvedValueOnce({ success: true });

    const result = await mockSubmitLogin(fakeUser);
    expect(mockSubmitLogin).toHaveBeenCalledWith(fakeUser);
    expect(result).toEqual({ success: true });
  });
});
