<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200608135202 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stat (id INT AUTO_INCREMENT NOT NULL, cost_points INT NOT NULL, move INT NOT NULL, life INT NOT NULL, vision INT NOT NULL, physical_dammages INT NOT NULL, distant_dammages INT NOT NULL, magical_dammages INT NOT NULL, physical_defense NUMERIC(4, 2) NOT NULL, distant_defense NUMERIC(4, 2) NOT NULL, magical_defense NUMERIC(4, 2) NOT NULL, grade INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE army (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, kind_id INT NOT NULL, name VARCHAR(100) NOT NULL, description LONGTEXT DEFAULT NULL, INDEX IDX_C212F36A76ED395 (user_id), INDEX IDX_C212F3630602CA9 (kind_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE kind (id INT AUTO_INCREMENT NOT NULL, stat_id INT DEFAULT NULL, name VARCHAR(100) NOT NULL, UNIQUE INDEX UNIQ_3BC4BCD99502F0B (stat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type (id INT AUTO_INCREMENT NOT NULL, stat_id INT DEFAULT NULL, name VARCHAR(100) NOT NULL, UNIQUE INDEX UNIQ_8CDE57299502F0B (stat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE squad (id INT AUTO_INCREMENT NOT NULL, army_id INT NOT NULL, type_id INT NOT NULL, name VARCHAR(100) NOT NULL, squad_filling INT DEFAULT NULL, INDEX IDX_CFD0FFE718D2742D (army_id), INDEX IDX_CFD0FFE7C54C8C93 (type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE squad_unit (id INT AUTO_INCREMENT NOT NULL, squad_id INT NOT NULL, unit_id INT NOT NULL, position_in_squad INT NOT NULL, INDEX IDX_4849FC7DF1B2C7C (squad_id), INDEX IDX_4849FC7F8BD700D (unit_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE unit (id INT AUTO_INCREMENT NOT NULL, kind_id INT NOT NULL, type_id INT NOT NULL, stat_id INT NOT NULL, name VARCHAR(100) NOT NULL, INDEX IDX_DCBB0C5330602CA9 (kind_id), INDEX IDX_DCBB0C53C54C8C93 (type_id), UNIQUE INDEX UNIQ_DCBB0C539502F0B (stat_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE army ADD CONSTRAINT FK_C212F36A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE army ADD CONSTRAINT FK_C212F3630602CA9 FOREIGN KEY (kind_id) REFERENCES kind (id)');
        $this->addSql('ALTER TABLE kind ADD CONSTRAINT FK_3BC4BCD99502F0B FOREIGN KEY (stat_id) REFERENCES stat (id)');
        $this->addSql('ALTER TABLE type ADD CONSTRAINT FK_8CDE57299502F0B FOREIGN KEY (stat_id) REFERENCES stat (id)');
        $this->addSql('ALTER TABLE squad ADD CONSTRAINT FK_CFD0FFE718D2742D FOREIGN KEY (army_id) REFERENCES army (id)');
        $this->addSql('ALTER TABLE squad ADD CONSTRAINT FK_CFD0FFE7C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id)');
        $this->addSql('ALTER TABLE squad_unit ADD CONSTRAINT FK_4849FC7DF1B2C7C FOREIGN KEY (squad_id) REFERENCES squad (id)');
        $this->addSql('ALTER TABLE squad_unit ADD CONSTRAINT FK_4849FC7F8BD700D FOREIGN KEY (unit_id) REFERENCES unit (id)');
        $this->addSql('ALTER TABLE unit ADD CONSTRAINT FK_DCBB0C5330602CA9 FOREIGN KEY (kind_id) REFERENCES kind (id)');
        $this->addSql('ALTER TABLE unit ADD CONSTRAINT FK_DCBB0C53C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id)');
        $this->addSql('ALTER TABLE unit ADD CONSTRAINT FK_DCBB0C539502F0B FOREIGN KEY (stat_id) REFERENCES stat (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE army DROP FOREIGN KEY FK_C212F36A76ED395');
        $this->addSql('ALTER TABLE kind DROP FOREIGN KEY FK_3BC4BCD99502F0B');
        $this->addSql('ALTER TABLE type DROP FOREIGN KEY FK_8CDE57299502F0B');
        $this->addSql('ALTER TABLE unit DROP FOREIGN KEY FK_DCBB0C539502F0B');
        $this->addSql('ALTER TABLE squad DROP FOREIGN KEY FK_CFD0FFE718D2742D');
        $this->addSql('ALTER TABLE army DROP FOREIGN KEY FK_C212F3630602CA9');
        $this->addSql('ALTER TABLE unit DROP FOREIGN KEY FK_DCBB0C5330602CA9');
        $this->addSql('ALTER TABLE squad DROP FOREIGN KEY FK_CFD0FFE7C54C8C93');
        $this->addSql('ALTER TABLE unit DROP FOREIGN KEY FK_DCBB0C53C54C8C93');
        $this->addSql('ALTER TABLE squad_unit DROP FOREIGN KEY FK_4849FC7DF1B2C7C');
        $this->addSql('ALTER TABLE squad_unit DROP FOREIGN KEY FK_4849FC7F8BD700D');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE stat');
        $this->addSql('DROP TABLE army');
        $this->addSql('DROP TABLE kind');
        $this->addSql('DROP TABLE type');
        $this->addSql('DROP TABLE squad');
        $this->addSql('DROP TABLE squad_unit');
        $this->addSql('DROP TABLE unit');
    }
}
