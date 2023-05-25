//
//  ItemPreview.swift
//  HackerNewsApollo
//
//  Created by Kobe Li on 2023-05-24.
//

import Foundation

struct ItemPreview: Codable, Identifiable {
    var itemId: Int
    var itemType: String
    var poster: String
    var postedAt: Int
    var title: String
    // Some items won't have urls (eg. Ask HN posts)
    var url: String?
    // Some items won't have comments (eg. Job posts)
    var totalReplies: Int?
    var upvotes: Int
    
    // Makes the struct conform to Identifiable
    var id: Int { itemId }
    
    static let example = ItemPreview(
        itemId: 36064515,
        itemType: "story",
        poster: "geox",
        postedAt: 1684966466,
        title: "UCLA Computer Grad Constructs “Crown Jewel of Cryptography”",
        url: "https://www.acm.org/media-center/2023/may/dissertation-award-2022",
        totalReplies: 10,
        upvotes: 36
    )
}
