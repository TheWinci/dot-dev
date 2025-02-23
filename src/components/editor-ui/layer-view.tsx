import React from "react";

export const LayerView = () => {
  return (
    <div
      className="hs-accordion-treeview-root"
      role="tree"
      aria-orientation="vertical"
    >
      {/* 1st Level Accordion Group */}
      <div
        className="hs-accordion-group"
        role="group"
        data-hs-accordion-always-open=""
      >
        {/* 1st Level Accordion */}
        <div
          className="hs-accordion active"
          role="treeitem"
          aria-expanded="true"
          id="hs-customize-tree-heading-one"
        >
          {/* 1st Level Accordion Heading */}
          <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
            <button
              className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
              aria-expanded="true"
              aria-controls="hs-customize-tree-collapse-one"
            >
              <svg
                className="hs-accordion-active:rotate-90 size-2.5 text-gray-600 transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
              </svg>
            </button>

            <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 grow cursor-pointer rounded-md px-1.5">
              <div className="flex items-center gap-x-3">
                <svg
                  className="size-4 shrink-0 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="4 7 4 4 20 4 20 7"></polyline>
                  <line x1="9" x2="15" y1="20" y2="20"></line>
                  <line x1="12" x2="12" y1="4" y2="20"></line>
                </svg>
                <div className="grow">
                  <span className="text-sm text-gray-800">Text</span>
                </div>
              </div>
            </div>
          </div>
          {/* End 1st Level Accordion Heading */}

          {/* 1st Level Collapse */}
          <div
            id="hs-customize-tree-collapse-one"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            role="group"
            aria-labelledby="hs-customize-tree-heading-one"
          >
            {/* 2nd Level Accordion Group */}
            <div
              className="hs-accordion-group relative ps-7 before:absolute before:start-3 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100"
              role="group"
              data-hs-accordion-always-open=""
            >
              {/* 2nd Level Nested Accordion */}
              <div
                className="hs-accordion active"
                role="treeitem"
                aria-expanded="true"
                id="hs-customize-tree-sub-heading-one"
              >
                {/* 2nd Level Accordion Heading */}
                <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                  <button
                    className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                    aria-expanded="true"
                    aria-controls="hs-customize-tree-sub-collapse-one"
                  >
                    <svg
                      className="hs-accordion-active:rotate-90 size-2.5 text-gray-600 transition duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                    </svg>
                  </button>

                  <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 grow cursor-pointer rounded-md px-1.5">
                    <div className="flex items-center gap-x-3">
                      <div className="grow">
                        <span className="text-sm text-gray-800">Frame</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End 2nd Level Accordion Heading */}

                {/* 2nd Level Collapse */}
                <div
                  id="hs-customize-tree-sub-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  role="group"
                  aria-labelledby="hs-customize-tree-sub-heading-one"
                >
                  {/* 3rd Level Accordion Group */}
                  <div
                    className="hs-accordion-group relative ps-7 before:absolute before:start-3 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100"
                    role="group"
                    data-hs-accordion-always-open=""
                  >
                    {/* 3rd Level Accordion */}
                    <div
                      className="hs-accordion active"
                      role="treeitem"
                      aria-expanded="true"
                      id="hs-customize-tree-sub-level-two-heading-one"
                    >
                      {/* 3rd Level Accordion Heading */}
                      <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                        <button
                          className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                          aria-expanded="true"
                          aria-controls="hs-customize-tree-sub-level-two-collapse-one"
                        >
                          <svg
                            className="hs-accordion-active:rotate-90 size-2.5 text-gray-600 transition duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                          </svg>
                        </button>

                        <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 grow cursor-pointer rounded-md px-1.5">
                          <div className="flex items-center gap-x-3">
                            <div className="grow">
                              <span className="text-sm text-gray-800">
                                Alignment
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End 3rd Level Accordion Heading */}

                      {/* 3rd Level Collapse */}
                      <div
                        id="hs-customize-tree-sub-level-two-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        role="group"
                        aria-labelledby="hs-customize-tree-sub-level-two-heading-one"
                      >
                        <div className="relative ms-3 ps-3 before:absolute before:start-0 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100">
                          {/* 3rd Level Item */}
                          <div
                            className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="size-4 shrink-0 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <rect
                                  width="9"
                                  height="6"
                                  x="6"
                                  y="14"
                                  rx="2"
                                ></rect>
                                <rect
                                  width="16"
                                  height="6"
                                  x="6"
                                  y="4"
                                  rx="2"
                                ></rect>
                                <path d="M2 2v20"></path>
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800">
                                  Left
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}

                          {/* 3rd Level Item */}
                          <div
                            className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="size-4 shrink-0 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <rect
                                  width="16"
                                  height="6"
                                  x="2"
                                  y="4"
                                  rx="2"
                                ></rect>
                                <rect
                                  width="9"
                                  height="6"
                                  x="9"
                                  y="14"
                                  rx="2"
                                ></rect>
                                <path d="M22 22V2"></path>
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800">
                                  Right
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}

                          {/* 3rd Level Item */}
                          <div
                            className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="size-4 shrink-0 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <rect
                                  width="6"
                                  height="16"
                                  x="4"
                                  y="6"
                                  rx="2"
                                ></rect>
                                <rect
                                  width="6"
                                  height="9"
                                  x="14"
                                  y="6"
                                  rx="2"
                                ></rect>
                                <path d="M22 2H2"></path>
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800">
                                  Top
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}

                          {/* 3rd Level Item */}
                          <div
                            className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                            role="treeitem"
                          >
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="size-4 shrink-0 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <rect
                                  width="6"
                                  height="16"
                                  x="4"
                                  y="2"
                                  rx="2"
                                ></rect>
                                <rect
                                  width="6"
                                  height="9"
                                  x="14"
                                  y="9"
                                  rx="2"
                                ></rect>
                                <path d="M22 22H2"></path>
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800">
                                  Bottom
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* End 3rd Level Item */}
                        </div>
                      </div>
                      {/* End 3rd Level Collapse */}
                    </div>
                    {/* End 3rd Level Accordion */}
                  </div>
                  {/* End 3rd Level Accordion Group */}
                </div>
                {/* End 2nd Level Collapse */}
              </div>
              {/* End 2nd Level Nested Accordion */}

              {/* 2nd Level Nested Accordion */}
              <div
                className="hs-accordion"
                role="treeitem"
                aria-expanded="false"
                id="hs-customize-tree-sub-heading-two"
              >
                {/* 2nd Level Accordion Heading */}
                <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                  <button
                    className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                    aria-expanded="false"
                    aria-controls="hs-customize-tree-sub-collapse-two"
                  >
                    <svg
                      className="hs-accordion-active:rotate-90 size-2.5 text-gray-600 transition duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                    </svg>
                  </button>

                  <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 grow cursor-pointer rounded-md px-1.5">
                    <div className="flex items-center gap-x-3">
                      <div className="grow">
                        <span className="text-sm text-gray-800">Font</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End 2nd Level Accordion Heading */}

                {/* 2nd Level Collapse */}
                <div
                  id="hs-customize-tree-sub-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="group"
                  aria-labelledby="hs-customize-tree-sub-heading-two"
                >
                  <div className="relative ms-3 ps-3 before:absolute before:start-0 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100">
                    {/* 2nd Level Item */}
                    <div
                      className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="size-4 shrink-0 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">Bold</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}

                    {/* 2nd Level Item */}
                    <div
                      className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="size-4 shrink-0 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <line x1="19" x2="10" y1="4" y2="4"></line>
                          <line x1="14" x2="5" y1="20" y2="20"></line>
                          <line x1="15" x2="9" y1="4" y2="20"></line>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">Italic</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}

                    {/* 2nd Level Item */}
                    <div
                      className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="size-4 shrink-0 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                          <line x1="4" x2="20" y1="20" y2="20"></line>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">
                            Underline
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}
                  </div>
                </div>
                {/* End 2nd Level Collapse */}
              </div>
              {/* End 2nd Level Nested Accordion */}

              {/* 2nd Level Nested Accordion */}
              <div
                className="hs-accordion"
                role="treeitem"
                aria-expanded="false"
                id="hs-customize-tree-sub-heading-three"
              >
                {/* 2nd Level Accordion Heading */}
                <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
                  <button
                    className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                    aria-expanded="false"
                    aria-controls="hs-customize-tree-sub-collapse-three"
                  >
                    <svg
                      className="hs-accordion-active:rotate-90 size-2.5 text-gray-600 transition duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
                    </svg>
                  </button>

                  <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 grow cursor-pointer rounded-md px-1.5">
                    <div className="flex items-center gap-x-3">
                      <div className="grow">
                        <span className="text-sm text-gray-800">Cursor</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End 2nd Level Accordion Heading */}

                {/* 2nd Level Collapse */}
                <div
                  id="hs-customize-tree-sub-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="group"
                  aria-labelledby="hs-customize-tree-sub-heading-three"
                >
                  <div className="relative ms-3 ps-3 before:absolute before:start-0 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100">
                    {/* 2nd Level Item */}
                    <div
                      className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="size-4 shrink-0 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                          <path d="m13 13 6 6"></path>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">Default</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}

                    {/* 2nd Level Item */}
                    <div
                      className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="size-4 shrink-0 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"></path>
                          <path d="M7 22h1a4 4 0 0 0 4-4v-1"></path>
                          <path d="M7 2h1a4 4 0 0 1 4 4v1"></path>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">Text</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}

                    {/* 2nd Level Item */}
                    <div
                      className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                      role="treeitem"
                    >
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="size-4 shrink-0 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"></path>
                          <path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                          <path d="M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"></path>
                          <path d="M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                          <path d="M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"></path>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">Grab</span>
                        </div>
                      </div>
                    </div>
                    {/* End 2nd Level Item */}
                  </div>
                </div>
                {/* End 2nd Level Collapse */}
              </div>
              {/* End 2nd Level Nested Accordion */}
            </div>
            {/* 2nd Level Accordion Group */}
          </div>
          {/* End 1st Level Collapse */}
        </div>
        {/* End 1st Level Accordion */}

        {/* 1st Level Accordion */}
        <div
          className="hs-accordion"
          role="treeitem"
          aria-expanded="false"
          id="hs-customize-tree-heading-two"
        >
          {/* 1st Level Accordion Heading */}
          <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
            <button
              className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
              aria-expanded="false"
              aria-controls="hs-customize-tree-collapse-two"
            >
              <svg
                className="hs-accordion-active:rotate-90 size-2.5 text-gray-600 transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
              </svg>
            </button>

            <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 grow cursor-pointer rounded-md px-1.5">
              <div className="flex items-center gap-x-3">
                <svg
                  className="size-4 shrink-0 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="16" height="6" x="2" y="2" rx="2"></rect>
                  <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
                  <rect width="4" height="6" x="8" y="16" rx="1"></rect>
                </svg>
                <div className="grow">
                  <span className="text-sm text-gray-800">Tools</span>
                </div>
              </div>
            </div>
          </div>
          {/* End 1st Level Accordion Heading */}

          {/* 1st Level Collapse */}
          <div
            id="hs-customize-tree-collapse-two"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            role="group"
            aria-labelledby="hs-customize-tree-heading-two"
          >
            <div className="relative ms-3 ps-3 before:absolute before:start-0 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100">
              {/* 1st Level Item */}
              <div
                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <svg
                    className="size-4 shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle
                      cx="13.5"
                      cy="6.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="17.5"
                      cy="10.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="8.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="6.5"
                      cy="12.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800">Color Picker</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}

              {/* 1st Level Item */}
              <div
                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <svg
                    className="size-4 shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 11-6 6v3h9l3-3"></path>
                    <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path>
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800">Highlighter</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}

              {/* 1st Level Item */}
              <div
                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <svg
                    className="size-4 shrink-0 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
                    <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
                    <path d="m2.3 2.3 7.286 7.286"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800">Pen</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}
            </div>
          </div>
          {/* End 1st Level Collapse */}
        </div>
        {/* End 1st Level Accordion */}

        {/* 1st Level Accordion */}
        <div
          className="hs-accordion"
          role="treeitem"
          aria-expanded="false"
          id="hs-customize-tree-heading-three"
        >
          {/* 1st Level Accordion Heading */}
          <div className="hs-accordion-heading flex w-full items-center gap-x-0.5 py-0.5">
            <button
              className="hs-accordion-toggle flex size-6 items-center justify-center rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
              aria-expanded="false"
              aria-controls="hs-customize-tree-collapse-three"
            >
              <svg
                className="hs-accordion-active:rotate-90 size-2.5 text-gray-600 transition duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
              </svg>
            </button>

            <div className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 grow cursor-pointer rounded-md px-1.5">
              <div className="flex items-center gap-x-3">
                <svg
                  className="size-4 shrink-0 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                </svg>
                <div className="grow">
                  <span className="text-sm text-gray-800">Files</span>
                </div>
              </div>
            </div>
          </div>
          {/* End 1st Level Accordion Heading */}

          {/* 1st Level Collapse */}
          <div
            id="hs-customize-tree-collapse-three"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            role="group"
            aria-labelledby="hs-customize-tree-heading-three"
          >
            <div className="relative ms-3 ps-3 before:absolute before:start-0 before:top-0 before:-ms-px before:h-full before:w-0.5 before:bg-gray-100">
              {/* 1st Level Item */}
              <div
                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <div className="grow">
                    <span className="text-sm text-gray-800">design.txt</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}

              {/* 1st Level Item */}
              <div
                className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 cursor-pointer rounded-md px-2"
                role="treeitem"
              >
                <div className="flex items-center gap-x-3">
                  <div className="grow">
                    <span className="text-sm text-gray-800">tutorials.txt</span>
                  </div>
                </div>
              </div>
              {/* End 1st Level Item */}
            </div>
          </div>
          {/* End 1st Level Collapse */}
        </div>
        {/* End 1st Level Accordion */}
      </div>
      {/* End 1st Level Accordion Group */}
    </div>
  );
};
