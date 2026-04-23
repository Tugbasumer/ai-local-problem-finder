import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("AI Local Problem Finder")
                    .font(.largeTitle)
                    .bold()
                    .padding()
                
                Text("Şehrini Güzelleştirmek İçin Bildirimde Bulun")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                
                Spacer()
                
                // Buraya ileride Liste ve Buton gelecek
            }
            .navigationTitle("Ana Sayfa")
        }
    }
}