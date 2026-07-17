/**
 * Center coordinates for all 32 Valrico neighborhoods.
 * Keys are URL slugs (kebab-case). Values are { lat, lng } objects.
 * Used by NeighborhoodMap component to place a marker on the map.
 */
export const neighborhoodCoords: Record<string, { lat: number; lng: number }> = {
  'bloomingdale': { lat: 27.8936, lng: -82.2578 },
  'bloomingdale-east': { lat: 27.8915, lng: -82.2490 },
  'bloomingdale-oaks': { lat: 27.8880, lng: -82.2650 },
  'bloomingdale-cove': { lat: 27.8950, lng: -82.2520 },
  'river-hills': { lat: 27.9180, lng: -82.2850 },
  'river-hills-masters': { lat: 27.9150, lng: -82.2800 },
  'diamond-hill': { lat: 27.8850, lng: -82.2750 },
  'buckhorn': { lat: 27.9050, lng: -82.2650 },
  'buckhorn-preserve': { lat: 27.9100, lng: -82.2700 },
  'buckhorn-springs-manor': { lat: 27.9020, lng: -82.2680 },
  'buckhorn-bloomingdale': { lat: 27.8980, lng: -82.2620 },
  'twin-lakes': { lat: 27.9080, lng: -82.2550 },
  'arista': { lat: 27.9120, lng: -82.2600 },
  'brentwood-hills': { lat: 27.9000, lng: -82.2500 },
  'canterbury-oaks': { lat: 27.8960, lng: -82.2550 },
  'crosby-crossings': { lat: 27.8940, lng: -82.2480 },
  'crestwood-estates': { lat: 27.9200, lng: -82.2750 },
  'duncan-groves': { lat: 27.8870, lng: -82.2700 },
  'heritage-crest': { lat: 27.9130, lng: -82.2650 },
  'kings-mill': { lat: 27.8920, lng: -82.2600 },
  'lake-valrico': { lat: 27.8900, lng: -82.2530 },
  'lakemont': { lat: 27.8890, lng: -82.2580 },
  'legends-pass': { lat: 27.8860, lng: -82.2560 },
  'northwood-estates': { lat: 27.8950, lng: -82.2450 },
  'savannah-landings': { lat: 27.9160, lng: -82.2700 },
  'shetland-ridge': { lat: 27.8880, lng: -82.2500 },
  'valri-park': { lat: 27.8910, lng: -82.2560 },
  'valrico-forest': { lat: 27.9140, lng: -82.2680 },
  'valrico-hills': { lat: 27.8930, lng: -82.2520 },
  'valrico-oaks': { lat: 27.8870, lng: -82.2540 },
  'wellington': { lat: 27.9070, lng: -82.2580 },
  'bent-tree-estates': { lat: 27.9190, lng: -82.2720 },
};
