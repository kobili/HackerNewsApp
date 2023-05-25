//
//  ItemListResponse.swift
//  HackerNewsApollo
//
//  Created by Kobe Li on 2023-05-24.
//

struct ItemListResponse: Codable {
    var total: Int
    // These aren't included in the response if they aren't passed to the API
    var page: Int?
    var perPage: Int?
    var stories: [ItemPreview]
}
