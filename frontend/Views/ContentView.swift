import SwiftUI

struct ContentView: View {
    @State private var errorLog: String = ""
    @State private var showAnalysis: Bool = false
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                Text("Merhaba Tuğba! 👋")
                    .font(.largeTitle)
                    .bold()
                    .padding(.top)
                
                Text("Bugün hangi sistem hatasını avlıyoruz?")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                
                TextEditor(text: $errorLog)
                    .frame(height: 200)
                    .padding()
                    .background(Color.gray.opacity(0.1))
                    .cornerRadius(10)
                    .overlay(
                        RoundedRectangle(cornerRadius: 10)
                            .stroke(Color.gray.opacity(0.3), lineWidth: 1)
                    )
                    .padding(.horizontal)
                
                Button(action: {
                    if !errorLog.isEmpty {
                        showAnalysis = true
                    }
                }) {
                    Text("Hata Analizi Yap")
                        .font(.headline)
                        .foregroundColor(.white)
                        .padding()
                        .frame(maxWidth: .infinity)
                        .background(errorLog.isEmpty ? Color.gray : Color.indigo)
                        .cornerRadius(10)
                }
                .disabled(errorLog.isEmpty)
                .padding(.horizontal)
                
                if showAnalysis {
                    VStack(alignment: .leading, spacing: 10) {
                        Text("Hata Analizi Sonucu")
                            .font(.headline)
                            .foregroundColor(.primary)
                        
                        Text("Hata Özeti: Girilen loglarda NullPointerException tespit edildi.")
                            .font(.body)
                        
                        Text("Çözüm Önerisi: Değişken kontrolü ekleyin ve null check yapın.")
                            .font(.body)
                        
                        HStack {
                            Circle()
                                .fill(Color.yellow)
                                .frame(width: 20, height: 20)
                            Text("+10 Hata Avcısı Puanı")
                                .font(.caption)
                                .foregroundColor(.secondary)
                        }
                    }
                    .padding()
                    .background(Color.white)
                    .cornerRadius(10)
                    .shadow(radius: 5)
                    .padding(.horizontal)
                }
                
                Spacer()
                
                HStack {
                    Circle()
                        .fill(Color.green)
                        .frame(width: 8, height: 8)
                    Text("Frontend Hazır | Mock Veri Modu")
                        .font(.caption)
                        .foregroundColor(.secondary)
                }
                .padding(.bottom)
            }
            .navigationTitle("Ana Sayfa")
        }
    }
}