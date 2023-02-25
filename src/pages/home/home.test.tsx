import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';

const fetchMocker = createFetchMock(vi);

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
import Home from '.';

describe('Home', () => {
  afterEach(() => {
    cleanup();
    fetchMocker.doMock();
  });

  it('should render correctly', () => {
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it('user can change the style of the characters by a table', async () => {
    const queryClient = new QueryClient();
    const { getByRole, findByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    const tableButton = getByRole('button', { name: /tablebutton/i });
    fireEvent.click(tableButton);
    expect(tableButton).toHaveStyle('background-color: rgb(98, 182, 183)');
    const table = await findByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('user can change the style of the characters by a left', async () => {
    const queryClient = new QueryClient();
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
    const leftButton = getByRole('button', { name: /leftButton/i });
    fireEvent.click(leftButton);
    expect(leftButton).toHaveStyle('background-color: rgb(98, 182, 183)');
  });
});
