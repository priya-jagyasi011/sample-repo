import { createCustomElement, actionTypes } from '@servicenow/ui-core';
import { Fragment } from '@servicenow/ui-renderer-snabbdom';
import "@servicenow/now-loader";
import "@servicenow/now-image";
import "@servicenow/now-checkbox";
import "@servicenow/now-text-link";


function generatePaginationConfig(paginationData) {
	return {
		...PAGINATION_CONTROL_DEFAULTS,
		pagesOverride: Math.ceil(paginationData.total / PAGINATION_LIMIT),
		selectedPage: paginationData.selectedPage,
		total: paginationData.total
	};
}
