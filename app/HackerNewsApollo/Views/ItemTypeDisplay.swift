//
//  ItemTypeView.swift
//  HackerNewsApollo
//
//  Created by Kobe Li on 2023-05-24.
//

import SwiftUI

struct ItemTypeDisplay: View {
    
    let type: String
    
    var body: some View {
        //        Text(type)
        //            .padding(6)
        //            .foregroundColor(.white)
        //            .background(Color.gray)
        //            .cornerRadius(10)
        
        Button(action: {
            print("button pressed")
            
        }) {
            Image(systemName: "arrow.up")
        }
        
    }
}

struct ItemTypeView_Previews: PreviewProvider {
    static var previews: some View {
        ItemTypeDisplay(type: "Story")
    }
}
