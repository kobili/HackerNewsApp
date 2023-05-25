//
//  ContentView.swift
//  HackerNewsApollo
//
//  Created by Kobe Li on 2023-05-24.
//

import SwiftUI

struct ContentView: View {
    @State private var itemList = ItemListResponse(total: 0, stories: [ItemPreview]());
    
    var body: some View {
        List {
            ForEach(itemList.stories) { story in
                HStack{
                    Spacer()
                    ItemPreviewView(item: story)
                    Spacer()
                }
            }
        }
        .listStyle(.inset)
        .task {
            await loadData()
        }
    }
    
    func loadData() async {
        guard let url = URL(string: "http://localhost:3000/live/topstories?page=1&perPage=10") else {
            print("Invalid url")
            return
        }
        
        do {
            let (data, _) = try await URLSession.shared.data(from: url)
            
            // decode response JSON
            if let decodedResponse = try? JSONDecoder().decode(ItemListResponse.self, from: data) {
                itemList = decodedResponse
            }
        } catch {
            print("Error in fetching top items from Hacker News. Defaulting to local JSON")
            itemList = Bundle.main.decode(ItemListResponse.self, from: "item_list_response.json")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
