// A mock function to mimic making an async request for data
export function fetchCount(amount = 3) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  