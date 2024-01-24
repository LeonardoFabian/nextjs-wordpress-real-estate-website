export const Sidebar = () => {

    const handleChange = () => {
        return null;
    }
    return (
        // <!-- Filters -->
        <form className="hidden lg:block max-w-xs border-r">
        <h3 className="sr-only">Categories</h3>
        <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
          <li>
            <a href="#">Totes</a>
          </li>
          <li>
            <a href="#">Backpacks</a>
          </li>
          <li>
            <a href="#">Travel Bags</a>
          </li>
          <li>
            <a href="#">Hip Bags</a>
          </li>
          <li>
            <a href="#">Laptop Sleeves</a>
          </li>
        </ul>

        <div className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            {/* Expand/collapse section button */}
            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
              <span className="font-medium text-gray-900">Color</span>
              <span className="ml-6 flex items-center">
                {/* Expand icon, show/hide based on section open state. */}
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                {/* Collapse icon, show/hide based on section open state. */}
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </h3>
          {/* Filter section, show/hide based on section state. */}
          <div className="pt-6" id="filter-section-0">
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="filter-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">White</label>
              </div>
              <div className="flex items-center">
                <input id="filter-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Beige</label>
              </div>
              <div className="flex items-center">
                <input id="filter-color-2" name="color[]" value="blue" type="checkbox" checked readOnly className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">Blue</label>
              </div>
              <div className="flex items-center">
                <input id="filter-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">Brown</label>
              </div>
              <div className="flex items-center">
                <input id="filter-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-color-4" className="ml-3 text-sm text-gray-600">Green</label>
              </div>
              <div className="flex items-center">
                <input id="filter-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-color-5" className="ml-3 text-sm text-gray-600">Purple</label>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            {/* Expand/collapse section button */}
            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
              <span className="font-medium text-gray-900">Category</span>
              <span className="ml-6 flex items-center">
                {/* Expand icon, show/hide based on section open state. */}
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                {/* Collapse icon, show/hide based on section open state. */}
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </h3>
          {/* Filter section, show/hide based on section state. */}
          <div className="pt-6" id="filter-section-1">
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600">New Arrivals</label>
              </div>
              <div className="flex items-center">
                <input id="filter-category-1" name="category[]" value="sale" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-600">Sale</label>
              </div>
              <div className="flex items-center">
                <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked readOnly className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-600">Travel</label>
              </div>
              <div className="flex items-center">
                <input id="filter-category-3" name="category[]" value="organization" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-category-3" className="ml-3 text-sm text-gray-600">Organization</label>
              </div>
              <div className="flex items-center">
                <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-category-4" className="ml-3 text-sm text-gray-600">Accessories</label>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 py-6">
          <h3 className="-my-3 flow-root">
            {/* <!-- Expand/collapse section button --> */}
            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
              <span className="font-medium text-gray-900">Size</span>
              <span className="ml-6 flex items-center">
                {/* <!-- Expand icon, show/hide based on section open state. --> */}
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </h3>
          {/* <!-- Filter section, show/hide based on section state. --> */}
          <div className="pt-6" id="filter-section-2">
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="filter-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-size-0" className="ml-3 text-sm text-gray-600">2L</label>
              </div>
              <div className="flex items-center">
                <input id="filter-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-size-1" className="ml-3 text-sm text-gray-600">6L</label>
              </div>
              <div className="flex items-center">
                <input id="filter-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-size-2" className="ml-3 text-sm text-gray-600">12L</label>
              </div>
              <div className="flex items-center">
                <input id="filter-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-size-3" className="ml-3 text-sm text-gray-600">18L</label>
              </div>
              <div className="flex items-center">
                <input id="filter-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-size-4" className="ml-3 text-sm text-gray-600">20L</label>
              </div>
              <div className="flex items-center">
                <input id="filter-size-5" name="size[]" value="40l" type="checkbox" checked readOnly className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label htmlFor="filter-size-5" className="ml-3 text-sm text-gray-600">40L</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}