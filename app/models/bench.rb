class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        benches = Bench.all
        rendered_benches = []

        benches.each do |bench|
            if(bench.lat < bounds["northEast"].lat && bench.lat > bounds["southWest"].lat && bench.lng < bounds["northEast"].lng && bench.lng > bounds["southWest"].lng)
                rendered_benches.push(bench)
            end
        end

        return benches
    end
end
