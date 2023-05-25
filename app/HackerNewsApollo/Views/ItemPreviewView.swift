//
//  ItemPreviewView.swift
//  HackerNewsApollo
//
//  Created by Kobe Li on 2023-05-24.
//

import SwiftUI

struct ItemPreviewView: View {
    
    let item: ItemPreview
    
    var body: some View {
        
        VStack(alignment: .center) {
            Text(item.title)
            
            if (item.url != nil) {
                Text(item.url!)
                    .padding(5)
                    .background(.gray)
                    .cornerRadius(5)
            }
            
            
            VStack {
                Text("by \(item.poster)")
                    .font(Font.custom("Roboto", size: 14))
                    .padding(5)
                
                HStack {
                    Group {
                        Text(Image(systemName: "arrow.up"))
                            .font(Font.custom("Roboto", size: 14)) +
                        Text("\(item.upvotes)")
                            .font(Font.custom("Roboto", size: 14))
                    }
                    
                    if (item.totalReplies != nil) {
                        Group {
                            Text(Image(systemName: "bubble.right"))
                                .font(Font.custom("Roboto", size: 14)) +
                            Text("\(item.totalReplies!)")
                                .font(Font.custom("Roboto", size: 14))
                        }
                    }

                    Group {
                        Text(Image(systemName: "clock"))
                            .font(Font.custom("Roboto", size: 14)) +
                        Text("7h")
                            .font(Font.custom("Roboto", size: 14))
                        
                    }
                }
            }
            
        }
        
    }

}
struct ItemPreviewView_Previews: PreviewProvider {
    static var previews: some View {
        ItemPreviewView(item: ItemPreview.example)
    }
}
