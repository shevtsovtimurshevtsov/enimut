interface FacetMapping {
    type: string;
    value: any;
}

// Type guard function to check if facet is a FacetMapping
function isFacetMapping(facet: any): facet is FacetMapping {
    return typeof facet === 'object' && facet !== null && facet.type === 'facet';
}

// Example usage of the check
const facet: any = { type: 'facet', value: 'example' };

if (!isFacetMapping(facet)) {
    console.log('The facet is not a valid facet mapping.');
} else {
    console.log('The facet is a valid facet mapping.');
}
