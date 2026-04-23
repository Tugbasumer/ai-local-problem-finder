import Foundation

struct Problem: Identifiable, Codable {
    let id: UUID
    let title: String
    let description: String
    let category: String
    let priorityScore: Double
    let aiReasoning: String
}